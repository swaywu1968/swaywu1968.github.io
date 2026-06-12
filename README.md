# Xinru Beta / 心如测试版

Xinru is a voice input app for Apple Silicon Mac. It combines local speech recognition, AI personas, cloud AI sources, and local AI models in one desktop workflow.

心如是一款面向 Apple Silicon Mac 的语音输入工具，把本地语音识别、AI 人设、云端 AI 来源和本地 AI 模型整合到一个桌面工作流里。

## Quick Links / 快速入口

- Website / 网站：<https://swaywu1968.github.io>
- Repository / 仓库：<https://github.com/swaywu1968/swaywu1968.github.io>
- Beta Download / 测试版下载：<https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FAXvsEh6dtm0IhLCoiT1HYT6oUJyVAcf5tKOpsFSCjTE1KwVX6V8w70W2%2F%24%7Bf%7D%3Fo%3DArW_xe9w2Gn6Viv1G6l-f1fGdK6CBfV_uhqsQC7CNRO5%26v%3D1%26x%3D3%26a%3DCAogB9bl3FmjDTCRUFS7XZTm9Cx1Pj7FOa5biSXimihtrwYSeBCT_5ji6zMYk4-UtvUzIgEAKgkC6AMA_3czgl9SBKhQnJVaBDDvRbZqJh3wDt-Hz2WVKf4snFXdBt3leLRdY13q-jEm5dnS1beeLS0kniZ3ciZlGCAla_GAyah3McFwSfHaZf5M-4jtuJ_h2XhiUh6wvOX0yfcQbQ%26e%3D1783867180%26fl%3D%26r%3DDD5318F3-4BFA-4574-AAB7-F84411B7B0A6-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.largeattachment%26ckz%3D5A5206F4-62FD-4130-A81B-FABB97B504D9%26p%3D185%26s%3D-WfpsywwHQxAYb-l3xqiYDC9L3w&uk=wGgkpusFyphpV9UcCvqpkQ&f=%E5%BF%83%E5%A6%82-%E6%B5%8B%E8%AF%95%E7%89%88-5.1.0-arm64.dmg&sz=259512809>
## Download / 下载

- Current beta download: iCloud private link from the official website
- Temporary use only: friends, early testing, and demo sessions

- 当前测试版下载：官网中的 iCloud 私人链接
- 当前仅用于：朋友试用、早期测试和 demo 展示

## System Requirements / 系统要求

- macOS 12 or later
- Apple Silicon Mac: M1 / M2 / M3 / M4
- Internet is recommended for cloud AI setup
- More free disk space is recommended if you want Whisper Small, Whisper Medium, or local AI models

- macOS 12 或更高版本
- Apple Silicon Mac：M1 / M2 / M3 / M4
- 如需使用云端 AI，建议保持联网
- 如果要使用 Whisper Small、Whisper Medium 或本地 AI，请预留更多磁盘空间

## First-Time Setup / 首次设置

For most users, the best order is:

1. Open `Settings`
2. Go to `AI Sources`
3. Add a cloud AI source first
4. Download a local AI model
5. Return to `AI Sources`
6. Choose both a default cloud source and a default local source

对大多数用户来说，最合适的顺序是：

1. 打开 `设置`
2. 进入 `AI配置`
3. 先添加一个云端 AI 来源
4. 下载一个本地 AI 模型
5. 回到 `AI配置`
6. 把默认云端来源和默认本地来源都设置好

## Step 1: Add a Cloud AI Source / 第一步：添加云端 AI 来源

- Open `Settings -> AI Sources`
- Click `Add Source`
- Choose `Cloud`
- Select a provider such as `OpenAI` or `DeepSeek`
- Paste your API key into the `API Key` field
- Enter a source name; the name can be anything you like
- Check the `Base URL` and model
- Click `Test Connection`
- If the test passes, click `Save`

- 打开 `设置 -> AI配置`
- 点击 `添加来源`
- 选择 `云端`
- 选择服务商，例如 `OpenAI` 或 `DeepSeek`
- 把你的 API key 粘贴到 `API Key` 栏
- 填写一个来源名称，这个名字可以自由填写
- 检查 `Base URL` 和模型是否正确
- 点击 `测试连接`
- 测试通过后，再点击 `保存`

Notes / 说明：

- Most users should finish cloud setup first because this is the fastest way to get Xinru working
- If you do not set a cloud source, many personas will not have a usable default source at the beginning

- 大多数用户建议先完成云端配置，因为这是最快能把心如用起来的方式
- 如果不先设置云端来源，很多人设一开始就不会有可用的默认来源

## Step 2: Download a Local AI Model / 第二步：下载本地 AI 模型

- Open `Settings -> Local AI`
- Browse the available local models
- Choose a model based on your needs
- Click `Download`
- Wait until the model finishes downloading

- 打开 `设置 -> 本地AI管理`
- 浏览当前可用的本地模型
- 根据自己的需求选择一个模型
- 点击 `下载`
- 等待模型下载完成

Notes / 说明：

- After a local model is downloaded, it will automatically appear in `AI Sources -> Default Local Source`
- You do not need to manually create a separate local source for these managed local models

- 本地模型下载完成后，它会自动出现在 `AI配置 -> 默认本地来源` 里
- 对这些由系统管理的本地模型，你不需要再手动新建一个本地来源

## Step 3: Choose Default Sources / 第三步：选择默认来源

After cloud setup and local AI download are finished:

- Return to `Settings -> AI Sources`
- Choose a `Default Cloud Source`
- Choose a `Default Local Source`

这两步都做完以后：

- 回到 `设置 -> AI配置`
- 先选一个 `默认云端来源`
- 再选一个 `默认本地来源`

Why this matters / 为什么这一步很重要：

- Xinru personas depend on default sources
- Default sources are not created automatically for new users
- If you skip this step, some personas may not work correctly

- 心如的人设依赖默认来源
- 新用户一开始不会自动拥有默认来源
- 如果跳过这一步，有些人设就可能无法正常工作

## Speech Recognition Model Recommendation / 语音识别模型建议

Xinru supports different Whisper speech recognition models. Do not assume `Whisper Tiny` is the best choice for everyone.

心如支持多种 Whisper 语音识别模型，不建议默认认为 `Whisper Tiny` 适合所有人。

Recommended guidance / 推荐建议：

- `Whisper Medium`: best if you want higher recognition quality
- `Whisper Small`: a good balance for many users
- `Whisper Tiny`: only for users who care more about speed than accuracy

- `Whisper Medium`：如果你更重视识别质量，优先推荐
- `Whisper Small`：对很多用户来说是比较平衡的选择
- `Whisper Tiny`：只适合更在意速度、对准确率要求没那么高的用户

Choose based on your device and your needs / 请根据设备情况和自己的需求选择：

- Smaller model: faster, lighter, lower accuracy
- Larger model: slower, heavier, better accuracy

- 更小的模型：更快、更轻、准确率较低
- 更大的模型：更慢、更占空间、准确率更高

## Quick Usage Tips / 快速使用建议

- Start with `General Optimization` if you are not sure which persona to use
- Use `Translation Mode` for Chinese-English translation
- Use `Meeting Notes` for meeting summaries
- Use `General AI` or `Assistant Mode` if you want direct AI responses

- 如果你不确定该选哪个人设，就先从 `通用优化` 开始
- 如果你要做中英翻译，就使用 `翻译模式`
- 如果你要整理会议内容，就使用 `会议记录`
- 如果你希望 AI 直接回答你，就使用 `通用AI` 或 `助手模式`

## Current Beta Status / 当前测试版状态

- This beta is shared in a lightweight way for friends and demos
- Setup details may continue to change
- A more formal public testing flow may come later

- 当前测试版主要用于朋友试用和 demo 展示
- 设置细节后续仍可能继续调整
- 以后会再升级为更正式的公开测试流程
