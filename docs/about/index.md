---
slug: /
title: 关于
---

import { Man } from "@site/src/components/Man";

:::caution

本站点正在建设中，翻译可能存在疏漏、错误，您可以[帮助我们](https://github.com/fenprace/void-docs-zh-hans/issues)。

:::

:::info

本文档是[《Void Handbook》](https://docs.voidlinux.org/)的中文翻译。原文以 [CC-BY-SA-4.0](https://github.com/void-linux/void-docs/blob/master/LICENSE) 许可证发布。

- 本文档最后修改日期为：2021-12-26。
- 原文最后更新的日期是：[2021-10-06](https://github.com/void-linux/void-docs/releases/tag/2021.10.06)。
- 原文可能存在更新，如果您发现已翻译内容有所滞后，您可以[提醒我们](https://github.com/fenprace/void-docs-zh-hans/issues)。

:::

欢迎阅读 Void 手册！为了高效地利用本文档，请阅读[《关于本手册》](./about-this-handbook.mdx)。安装 `void-docs` 软件包，可以用 <Man to="void-docs/1" /> 工具，以多种格式、在本地阅读本文档。

Void 是一个独立的，[滚动更新](https://en.wikipedia.org/wiki/Rolling_release)的 Linux 发行版。Void 全从头开发，并不是哪个发型版的 fork。Void 重视稳定性甚于追求[最新潮](https://en.wikipedia.org/wiki/Bleeding_edge_technology)的技术。除此之外，Void 还有这些与众不同的特点：

- [XBPS](https://github.com/void-linux/xbps) 包管理器，由 Void 内部开发，性能优异。XBPS 在更新软件包前会检查兼容性，确保更新不会破坏依赖。
- 完美支持 [musl libc](https://musl.libc.org/)，musl 专注于兼容标准和正确性。在 musl 系统上，可以构建出一些 glibc 系统上不可能构建出的静态组件。
- 使用 [runit](#) 作为 <Man to="init/8" /> 系统和服务监视器。runit 允许使用 musl 作为 libc，[systmed](https://www.freedesktop.org/wiki/Software/systemd/) 无法做到这一点。使用 runit 还使得 Void 的核心系统更精简高效，源代码更简洁。

通常，Void 的稳定性足以应对日常使用。Void 由少数开发者在空闲时间里开发，我们以此为乐，希望我们的工作可以帮助到其他人。

“Void”之名来自 C 语言关键字 `void`，没有什么特殊含义。
