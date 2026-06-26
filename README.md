# Git 0 to 100

Git 0 to 100 是一个教学习者掌握 Git 最佳实践的静态网站，强调从个人命令练习到团队协作规范的完整学习体验。

## 产品定位

- **目标用户**：Git 初学者、准备进入团队协作的开发者、需要制定 Git 规范的技术负责人。
- **核心价值**：将 Git 命令、真实场景、团队规范和练习任务组织成可执行路径。
- **设计原则**：先理解心智模型，再进行场景演练，最后沉淀为团队工作流。

## 页面模块

- Hero：说明网站价值与核心学习目标。
- 学习路径：展示 6 个从 0 到 100 的学习阶段。
- 最佳实践：解释团队协作中必须掌握的 Git 约定。
- 练习场：根据用户水平推荐下一步练习。
- GitHub Pages：提供静态站点发布步骤。

## GitHub Pages 部署

该项目无需构建工具，并已提供 `.github/workflows/pages.yml` 自动部署流程。

1. 将代码推送到 GitHub 仓库的 `main` 分支。
2. 进入仓库 **Settings → Pages**。
3. Source 选择 **GitHub Actions**。
4. 等待 **Deploy GitHub Pages** workflow 完成。
5. 在 workflow 输出或仓库 Pages 设置中查看访问地址。

如果你希望使用分支发布，也可以在 Pages 设置中选择 **Deploy from a branch**，Branch 选择 `main`，Folder 选择 **/root**。

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。
