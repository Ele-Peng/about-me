const projectData = {
    work: [
        {
            title: '猫眼演出 - 项目数据分析全链产品',
            label: '项⽬概述：多端项⽬数据分析可视化图表展示⼯具；<br/>负责内容：<br/>项⽬数据分析全链产品的技术选型，图表公共组件库的抽取以及部分通⽤组件库开发，参与猫眼专业版演出侧项⽬的打包优化；<br/>定义图表合理信息度的衡量标准，对应相应规则，多个约束组构成完整的响应式方案解决图表在任何数据和现实尺寸的基本可读性问题；利用 window.devicePixelRatio 指定不同的 pixelRatio 解决 canvas 在高清屏上显示时模糊问题；<br/>利用 Antv <ff-canvas> 扩展可视化图表在微信小程序空白；<br/>利用 canvas ImageData 结合多线程 Worker 解决弱网情况下主题色像素计算产生的白屏问题，并转成 hsl 在相同色相进行渐变；<br/>利用 source(data) 仅更新数据，解决大数据量级下带来的实时重绘；利用 Shape 自定义业务图形展示需求；<br/>集合 webpack-bundle-analyzer，定制 code splitting 策略，除必须引入的核心包 core，按需引入图表配置模块；<br/>项目成果：<br/>为2019年十场林俊杰，N场周杰伦，陈情令，RISE，VAC等爆款项目（最高70万QPS），提供流畅细粒度的数据分析复盘，帮助产品运营及时调整后期策略；<br/>项目经优化后，包体积减小 20%；<br/>',
            skills: ['React', 'Dva', 'Umi', 'React-Hooks', 'Vue', '微信小程序', 'Antv-F2', 'Antv-G2', '数据可视化', '实时更新'],
            img: 'https://s2.ax1x.com/2020/02/08/1RHT0A.png',
            avator:'https://s2.ax1x.com/2020/02/08/1RHT0A.png',
        },
        {
            title: '猫眼智慧场馆 - 小程序&SASS后台',
            label: '项目概述：为场馆、主办提供票务系统、智慧现场、会员管理、微信小程序、全渠道营销、POI服务、大数据分析 等多场景一站式票务系统解决方案<br/>主要负责小程序C端购票流程改造，解耦复杂的购票支付逻辑，支持优惠券、会员折扣、积分抵扣等配置化支付方式，业务性能指标埋点，主题色配置脚本编写；<br/>负责内容：<br/>场馆第三方小程序代码审核工具；全渠道会员管理，优惠券、会员积分、会员折扣等C端购票流程；场馆自销、二维码分销、API分销、线下分销等多种销售方式玩法；用户画像、票务数据报表、综合商业体数据报告等数据可视化开发；<br/>项目难点：<br/>C端购票流程配置化，解耦复杂的购票支付逻辑；<br/>业务性能指标埋点，并利用其上报数据，采用图片懒加载，截流，不同场景下小程序分包策略，合理利用缓存，优化小程序首次启动的下载时间；<br/>编写小程序主题色配置脚本，在第三方小程序上传模版之前，修改 ext，并利用 CSS3 currentColor，以及 less 变量引用，做到多模板样式开发；<br/>独立梳理微信小程序第三方平台上线流程，开发代码模版库，代码管理等代第三方开发工具；<br/>项目成果：<br>23 家场馆方完成合同签订，其中已进行智慧场馆系统开通申请的 14 家，已完成开通的 11 家，1 家处在问题沟通中，2 家申请未审批；<br/>已开通自销小程序的 6 家，其中 3 家的自销小程序已开始销售；<br/>',
            skills: ['Vue', 'iView', '微信小程序'],
            img: 'https://s3.ax1x.com/2020/11/27/DsVDtU.png',
            avator: 'https://s3.ax1x.com/2020/11/27/DsVDtU.png',
        },
        {
            title: '经纪公司 - 粉丝小程序&SASS粉丝通',
            label: '项目概述：<br/>为经济公司提供“行业领先、专业一站式”粉丝管理解决方案：粉丝小程序和SASS粉丝通。<br/>负责内容：<br/>主要负责粉丝通后台会员管理、数据画像、舆情分析、巡演分析、内容投放等运营管理工具开发；<br/>带领团队小伙伴实现粉丝通小程序从0到1的前期开发工作；开发多种UI组件，Tab，地址选择栏，自定义标题栏，时间轴等；相关账号体系的调通；对页面进行结构划分和模块划分，遵循高内聚低耦合，更好的去做模块灵活性的变化和页面的通用逻辑的抽取；<br/>项⽬难点：<br/>考虑到项⽬迭代少，业务需求接⼝⽂档不全等因素，推动 Typescript 在项⽬的落地；<br/>利⽤ Umi 的 mock 功能，缩短服务端的开发所阻塞的时间；<br/>项目成果：<br/>现已签约 2 家主流经纪公司，1 家超大型经纪公司，合同沟通中。<br/>',
            skills: ['React', 'Umi', 'Dva', 'AntDesign', 'Typescript'],
            img: 'https://s3.ax1x.com/2020/11/27/DsEOFU.png',
            avator:'https://s3.ax1x.com/2020/11/27/DsEOFU.png',
        },
        {
            title: '猫眼演出全品类项目详情页改版包装',
            label: '参与开发猫眼详情页改版B端配置，支持精彩现场视频，展览亮点等多媒体配置；支持同步预览；<br/>后续和设计师一起后续不断调整迭代，调整出最优效果上线。<br/>已用于猫眼全品类详情页展示。<br/>',
            skills: ['React','Redux','Umi','AntDesign','Dva'],
            img: 'https://s3.ax1x.com/2020/11/27/DsEgdf.png',
            avator: 'https://s3.ax1x.com/2020/11/27/DsEgdf.png',
        },
        {
            title: '猫眼演出运营工具',
            label: '负责内容：参与开发先付先抢猫眼演出有史以来最复杂的购票逻辑售卖新模式<br/>深刻的业务理解能力，主要负责抢票订单逻辑处理，前后帮助产品一起梳理订单逻辑，并与测试一同沉淀开发逻辑文档；<br/>',
            skills: ['微信小程序', 'Less'],
            img: 'https://s3.ax1x.com/2020/11/27/DsVW0x.png',
            avator: 'https://s3.ax1x.com/2020/11/27/DsVW0x.png',
        },
    ],
    personal: [
        {
            title: '全都是泡沫',
            label: '借助 Web Audio API 获取音频，并将其解码后的数据，获取频率及时间域的信息，使用 Canvas 绘制出根据振幅半径变大的粉红泡泡以及高度变化的柱状图，快来试试吧～～～<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/Ele-Peng/pink-audio-bubble">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://ele-peng.github.io/pink-audio-bubble/index.html">LiveDemo</a>',
            skills: ['Web Audio', 'Canvas'],
            img: 'https://s3.ax1x.com/2020/11/27/DsElRJ.png',
            avator:'https://s3.ax1x.com/2020/11/27/DsAR29.png',
        },
        {
            title: 'pallete',
            label: '利用 Canvas 获取上传图片的 ImageData，通过算法拾取出主色调，支持矩阵变换，实现灰度化、暖色调、高斯模糊等基本像素操作<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/Ele-Peng/miniprogram-pallete">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://ele-peng.github.io/pallete/demo.html">LiveDemo</a>',
            skills: ['Canvas', 'linear algebra'],
            img: 'https://s3.ax1x.com/2020/11/27/DsAKgA.png',
            avator:'https://s3.ax1x.com/2020/11/27/Dskc6I.png',
        },
    ]
}
export default projectData