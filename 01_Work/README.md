# 01_Work

存放所有工作相关内容。当前重点工作域为低代码平台和 MOM。

## 当前结构

```text
01_Work/
├─lowcode/
├─mom/
├─docs/
├─tools/
└─temp/
```

## 目录边界

- `lowcode/`：低代码相关正式仓库
- `mom/`：MOM 相关正式仓库
- `docs/`：工作文档，如架构说明、路线图、会议纪要、发布说明
- `tools/`：工作脚本、SQL、环境初始化与辅助工具
- `temp/`：临时联调文件、一次性脚本、导出数据和短期材料

## 核心仓库归位

### lowcode

- `km-artizen`
- `km-dev`
- `km-dev-docs`

### mom

- `km-mom-next`
- `km-mom-next-web`

## 放置规则

1. 所有工作相关内容都放在 `01_Work/` 下，不额外增加 `KM/` 目录。
2. 正式仓库按业务域直接放入 `lowcode/` 或 `mom/`。
3. 工作文档、脚本、临时材料统一留在 `docs/`、`tools/`、`temp/`，不要分散到工作区其他一级目录。
4. 只有当工作域明显增加且现有结构不够用时，再考虑继续拆分层级。
