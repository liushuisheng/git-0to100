const path = [
  ['入门心智', '理解工作区、暂存区、仓库和远端的边界，建立每次提交都可解释的习惯。', 'init / status / add / commit'],
  ['历史阅读', '用 log、diff 和 blame 追踪上下文，知道如何用历史回答“为什么这样改”。', 'log / diff / blame'],
  ['分支协作', '掌握短分支、同步远端、Pull Request 和代码评审前的自检清单。', 'switch / fetch / push'],
  ['冲突处理', '通过可重复演练理解冲突来源，学会保留意图而不是机械接受版本。', 'merge / rebase'],
  ['安全回退', '区分 restore、revert、reset 的适用场景，避免破坏共享历史。', 'restore / revert / reset'],
  ['发布交付', '用 tag、release notes 和分支保护规则让版本交付可追踪、可回滚。', 'tag / release']
];

const tips = [
  '提交前先运行 git diff --staged，把提交当作给未来队友写的一封说明信。',
  '一个提交只表达一个意图；如果需要用“并且”描述提交内容，通常就该拆分。',
  '优先在本地用小分支探索，推送前整理提交信息，让远端历史更易阅读。',
  '共享分支上优先使用 revert 撤销变更，避免 reset 改写他人的协作基础。',
  'Pull Request 描述应包含背景、方案、验证方式和风险点，而不是只写“已完成”。'
];

const recommendations = {
  starter: ['完成第一次本地仓库练习', '创建仓库，修改 README，分别观察 git status 在未跟踪、已暂存、已提交三个阶段的变化。'],
  solo: ['练习整理提交历史', '用 git commit --amend 修正文案，再用 git log --oneline 检查历史是否清晰。'],
  team: ['模拟一次协作冲突', '创建两个分支修改同一段文本，执行 merge，手动解决冲突并记录决策原因。'],
  lead: ['制定团队 Git 守则', '写出分支命名、提交格式、PR 模板、合并策略和回滚流程，并让团队试运行一周。']
};

const timeline = document.querySelector('#timeline');
path.forEach(([title, body, tag], index) => {
  const card = document.createElement('article');
  card.className = 'timeline-card';
  card.dataset.step = String(index + 1).padStart(2, '0');
  card.innerHTML = `<span class="tag">${tag}</span><h3>${title}</h3><p>${body}</p>`;
  timeline.appendChild(card);
});

let tipIndex = new Date().getDate() % tips.length;
const tipNode = document.querySelector('#daily-tip');
const renderTip = () => { tipNode.textContent = tips[tipIndex]; };
renderTip();
document.querySelector('#next-tip').addEventListener('click', () => {
  tipIndex = (tipIndex + 1) % tips.length;
  renderTip();
});

document.querySelectorAll('.quiz button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quiz button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const [title, body] = recommendations[button.dataset.level];
    document.querySelector('#recommendation').innerHTML = `<h3>${title}</h3><p>${body}</p>`;
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});
