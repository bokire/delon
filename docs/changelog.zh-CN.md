---
order: 100
title: 更新日志
type: Other
---

NG-ALAIN 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## [12.1.1](https://github.com/ng-alain/delon/compare/12.1.0...12.1.1) (2021-08-13)

### Bug Fixes

* **abc:st:** 修复若只设置 `scroll.x` 时 `toTop` 无效 ([#1311](https://github.com/ng-alain/delon/issues/1311)) ([c07e1fa](https://github.com/ng-alain/delon/commit/c07e1fa688d7dbf4cbf593c08886b6346e5de46c))
* **auth:** 修复写入Cookie含有无效值 ([#1316](https://github.com/ng-alain/delon/issues/1316)) ([fd97e51](https://github.com/ng-alain/delon/commit/fd97e51fd37d4e011940e3ae518a0fa24badf819))
* **form:widget:select:** 修复 `change` 事件 `orgData` 参数没有返回正确值 ([#1312](https://github.com/ng-alain/delon/issues/1312)) ([527c212](https://github.com/ng-alain/delon/commit/527c212ae4ded1ba7c3b36ea039d8d72cb22fd59))
* **form:** 修复 `button` 无法设置 `null` 值 ([#1314](https://github.com/ng-alain/delon/issues/1314)) ([d289411](https://github.com/ng-alain/delon/commit/d2894115b1ef9e898303952307e4f5ead6f64bc5))


# [12.1.0](https://github.com/ng-alain/delon/compare/12.0.3...12.1.0) (2021-08-07)

### Bug Fixes

* **abc:page-header:** 修复很多标签时无法自动滚动 ([#1304](https://github.com/ng-alain/delon/issues/1304)) ([90677bb](https://github.com/ng-alain/delon/commit/90677bb3341a8b5286f65e55e3d5183a69f7e4a3))
* **abc:reuse-tab:** 修复重复触发 `_onReuseInit` 事件 ([#1308](https://github.com/ng-alain/delon/issues/1308)) ([4282fc2](https://github.com/ng-alain/delon/commit/4282fc2ea1556a0b4e0459e9c9385edf7fb0f670))
* **cli:** 移除测试用例过期属性 ([#1305](https://github.com/ng-alain/delon/issues/1305)) ([259a1c2](https://github.com/ng-alain/delon/commit/259a1c2a90f5473081807b3af2895d68b9375e07))

### Features

* **abc:exception:** 新增 `backRouterLink` 属性 ([#1299](https://github.com/ng-alain/delon/issues/1299)) ([6a94dbd](https://github.com/ng-alain/delon/commit/6a94dbd6ae80ce5ae4176d28731e373e0c26ee55))
* **abc:st:** 新增点击行切换类名 `clickRowClassName` 属性 ([#1307](https://github.com/ng-alain/delon/issues/1307)) ([5e5978d](https://github.com/ng-alain/delon/commit/5e5978d1fbd5eaf96f252871cbcc766bad8f2381))
* **form:** `number` 新增 `hideStep` 属性用于隐藏步骤图标 ([#1303](https://github.com/ng-alain/delon/issues/1303)) ([f895bf0](https://github.com/ng-alain/delon/commit/f895bf0abbfc88dc4154bd57ef65b8321dae6fb9))


## [12.0.3](https://github.com/ng-alain/delon/compare/12.0.2...12.0.3) (2021-08-01)

### Bug Fixes

* **abc:page-header:** 修复 `should be run in update mode` 错误 ([#1297](https://github.com/ng-alain/delon/issues/1297)) ([1e4ea43](https://github.com/ng-alain/delon/commit/1e4ea439adf3eb0f9cb3419a9d6b8b5ea84714d9))
* **abc:st:** 修复导出Excel未设置宽度 ([#1296](https://github.com/ng-alain/delon/issues/1296)) ([b0a9a96](https://github.com/ng-alain/delon/commit/b0a9a964085f951efe2ff58c8c853e0c178a8bd9))
* **form:** 修复 `formData` 签名丢失问题 ([#1296](https://github.com/ng-alain/delon/issues/1300))

## [12.0.2](https://github.com/ng-alain/delon/compare/12.0.1...12.0.2) (2021-07-26)

### Bug Fixes

* **cli:** `ng update ng-alain --fixAngularJson=false` 增加 `fixAngularJson` 选项，可忽略对 `angular.json` 的调整 ([#1294](https://github.com/ng-alain/delon/issues/1294)) ([dbe0642](https://github.com/ng-alain/delon/commit/dbe06424c59fa005f86c0f196bb5ad053ac4665f))


## [12.0.1](https://github.com/ng-alain/delon/compare/12.0.0...12.0.1) (2021-07-24)

### Bug Fixes

* **abc:st:** 修复调用 `export` 在指定数据下应调用优化函数 ([#1288](https://github.com/ng-alain/delon/issues/1288)) ([9416fe1](https://github.com/ng-alain/delon/commit/9416fe16360e7e9def0a6b9150bd5e8bbc166386))
* **cli:** 修复重复多余定义 `UserLoginComponent` ([#1289](https://github.com/ng-alain/delon/issues/1289)) ([1042aea](https://github.com/ng-alain/delon/commit/1042aeae16b6f06022bf6cc0a52727a5458b8bc1))
* **cli:** 修复命令行重复别名 `t` ([#1291](https://github.com/ng-alain/delon/issues/1291)) ([c4e1943](https://github.com/ng-alain/delon/commit/c4e1943475d46f94683345cc94fc8c5eb83e1267))
* **theme:http:** 修复丢失 `HttpContext` ([#1292](https://github.com/ng-alain/delon/issues/1292)) ([a394400](https://github.com/ng-alain/delon/commit/a394400c003e1e73c42789aa43baadbc590af080))


# [12.0.0](https://github.com/ng-alain/delon/compare/11.10.4...12.0.0) (2021-07-16)

### Features

* **abc:st:** 新增 `index` 支持智能代码补全 ([#1284](https://github.com/ng-alain/delon/issues/1284)) ([5d8c017](https://github.com/ng-alain/delon/commit/5d8c01788e6f23853d83a67593b87ffee86bd2d4))
* **abc:notice-icon:** 新增 `emptyText`, `title`, `description` 支持 `TemplateRef` ([#1256](https://github.com/ng-alain/delon/issues/1256)) ([596ca40](https://github.com/ng-alain/delon/commit/596ca40c254e619dc868deced7d4f105fac2d797))
* **abc:se,sv:** 新增对 `nz-divider` 支持，显示分隔线 ([#1283](https://github.com/ng-alain/delon/issues/1283)) ([46d6e3d](https://github.com/ng-alain/delon/commit/46d6e3d60a8903c4a71fc64efc5e8b2d596c3742))
* **cache:** 新增自定义请求接口 ([#1253](https://github.com/ng-alain/delon/issues/1253)) ([084037e](https://github.com/ng-alain/delon/commit/084037e73c094636eb510565863e403259f264d1))
* **chart:bar,mini-area,mini-bar:** 数据内新增 `color` 参数 ([#1279](https://github.com/ng-alain/delon/issues/1279)) ([1ea098d](https://github.com/ng-alain/delon/commit/1ea098daaeca6eedfb07f5f342052b1c3e3ffb6a))
* **chart:echarts:** 支持跟随浏览器调整 ([#1263](https://github.com/ng-alain/delon/issues/1263)) ([9ac3a99](https://github.com/ng-alain/delon/commit/9ac3a99c85f773e63232b2723201b8888fbe5cf0))
* **form:** `visibleIf` 参数增加 `property` 属性 ([#1281](https://github.com/ng-alain/delon/issues/1281)) ([980b8a5](https://github.com/ng-alain/delon/commit/980b8a528bbf59f474984994f6a7271a89cf70b6))
* **theme:theme-btn:** 增加 `deployUrl` 属性 ([#1264](https://github.com/ng-alain/delon/issues/1264)) ([05ce8f2](https://github.com/ng-alain/delon/commit/05ce8f20f7c4b62d75c23e3b1013c8e9951034ff))
* **theme:** 增加工具类开关 ([#1280](https://github.com/ng-alain/delon/issues/1280)) ([273aeed](https://github.com/ng-alain/delon/commit/273aeedeb748f97163cd0282288a9947dc93d605))
* **util:** 增加手机号 `16` 开头格式 ([#1282](https://github.com/ng-alain/delon/issues/1282)) ([cd98359](https://github.com/ng-alain/delon/commit/cd983593e05fbdcdb83cb155d6b5f7fbba435702))

### Performance Improvements

* 使用内置简易 `i18n` 替代 `@ngx-translate/core` ([#1276](https://github.com/ng-alain/delon/issues/1276)) ([ba48cc3](https://github.com/ng-alain/delon/commit/ba48cc3f574837064940f720323351172dd4e3df))

### BREAKING CHANGES

**DelonChartModule**
- 已移除

**WINDOW**
- 使用 `import { WINDOW } from '@delon/util/token';` 替代

**_currency**
- 使用 [price](https://ng-alain.com/util/pipes-currency/en?#price) 管道替代

**_HttpClient.end**
- 使用 `cleanLoading` 替代

**ModalHelper.open, static**
- `open` 使用 `create` 替代
- `static` 使用 `createStatic` 替代

**ScrollService**
- 使用 `import { ScrollService } from '{AT}delon/util/browser';` 替代

**Badges Class**
- 使用 `nz-tag` 替代

**AlainMockConfig.data**
- 使用 `DelonMockModule.forRoot({ data: {} })` 替代

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
