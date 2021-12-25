---
title: 安装
---

本章包括安装 Void 的一般流程。对于特殊的流程，参考[《进阶安装》](#)一节。

## 基础系统要求

尽管 Void 对硬件的要求很低，我们还是建议在比下述配置更高的系统上安装：

| Architecture | CPU              | RAM  | Storage |
| ------------ | ---------------- | ---- | ------- |
| x86_64-glibc | x86_64           | 96MB | 700MB   |
| x86_64-musl  | x86_64           | 96MB | 600MB   |
| i686-glibc   | Pentium 4 (SSE2) | 96MB | 700MB   |

注意，有些安装配置需要更多的硬件资源。具体细节取决于具体的配置。

Void 不支持 i386、i486 或 i586 架构。

在安装 musl Void 前，请阅读本手册的 [musl](#) 一章，以获知软件的不兼容信息。

安装过程不需要连接网络，但还是非常建议在安装过程中连接网络以下载更新。ISO 镜像包含了安装系统所需要的数据，可以在无网络连接时安装。

## 下载安装镜像

最近的 live 镜像和 rootfs 压缩包可以从 https://alpha.de.repo.voidlinux.org/live/current/ 下载，也可以从[其他镜像](https://docs.voidlinux.org/xbps/repositories/mirrors/index.html)下载。以日期排列的历史发布可以在 https://alpha.de.repo.voidlinux.org/live/ 找到。

## 验证镜像

每个镜像发布目录都包含两个用来验证镜像的文件。一个 `sha256sum.txt` 文件包含了镜像的校验和，可以用来验镜像的完整性。另有一个 `sha256sum.sig` 文件，用来检查校验和的真实性。

有必要验证镜像的完整性和真实性，因此建议也下载 `sha256sum.txt` 和 `sha256sum.sig` 两个文件。

### 验证镜像完整性

你可以用 [sha256sum(1)](https://man.voidlinux.org/sha256sum.1) 和上述的 `sha256sum.txt` 文件验证下载文件的完整性。下面的命令会检查你已下载镜像的完整性：

```
$ sha256sum -c --ignore-missing sha256sum.txt
void-live-x86_64-musl-20170220.iso: OK
```

以上输出说明镜像没有损坏。

### 验证数字签名

强烈建议在使用镜像前，先验证镜像的签名，确保镜像文件没有被篡改。

每个镜像
如果你已经在使用 Void 系统，你可以从 `void-release-keys` 软件包获取密钥，XBPS。你还需要 signify(1) 或 minisign(1) 的拷贝