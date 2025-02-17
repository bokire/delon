import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChange,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';

import { InputNumber, NumberInput, ZoneOutside } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { MediaService } from './media.service';
import { PlyrMediaSource, PlyrMediaType } from './plyr.types';

declare const Plyr: NzSafeAny;

@Component({
  selector: 'media',
  exportAs: 'mediaComponent',
  template: `<ng-content></ng-content>`,
  host: {
    '[style.display]': `'block'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;

  private _p: NzSafeAny;
  private videoEl: HTMLElement;
  private time: NzSafeAny;
  private notify$: Subscription;

  @Input() type: PlyrMediaType = 'video';
  @Input() source: string | PlyrMediaSource;
  @Input() options: NzSafeAny;
  @Input() @InputNumber() delay = 0;
  @Output() readonly ready = new EventEmitter<NzSafeAny>();

  get player(): NzSafeAny {
    return this._p;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private srv: MediaService,
    public ngZone: NgZone,
    private platform: Platform
  ) {
    this.notify$ = this.srv.notify().subscribe(() => this.initDelay());
  }

  @ZoneOutside()
  private initDelay(): void {
    this.time = setTimeout(() => this.init(), this.delay);
  }

  private init(): void {
    if (!(window as NzSafeAny).Plyr) {
      throw new Error(
        `No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(
          this.srv.cog.urls
        )}`
      );
    }

    this.ensureElement();

    const player = (this._p = new Plyr(this.videoEl, {
      ...this.srv.cog.options
    }));

    player.on('ready', () => this.ready.next(player));

    this.uploadSource();
  }

  private ensureElement(): void {
    const { type } = this;
    let el = this.el.nativeElement.querySelector(type) as HTMLElement;
    if (!el) {
      el = this.renderer.createElement(type);
      (el as HTMLVideoElement).controls = true;
      this.el.nativeElement.appendChild(el);
    }
    this.videoEl = el;
  }

  private destroy(): void {
    if (this._p) {
      this._p.destroy();
    }
  }

  private uploadSource(): void {
    const { source, type } = this;
    this._p.source = typeof source === 'string' ? { type, sources: [{ src: source }] } : source;
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.srv.load();
  }

  ngOnChanges(changes: { [p in keyof MediaComponent]?: SimpleChange }): void {
    this.srv.cog = { options: this.options };
    if (changes.source && this._p) {
      this.uploadSource();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.time);
    this.destroy();
    this._p = null;
    this.notify$.unsubscribe();
  }
}
