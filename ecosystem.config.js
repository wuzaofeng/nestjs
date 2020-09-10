module.exports = {
	apps: [
		{
			name: 'hs-nest',//项目名称
			cwd: './',//当前工作路径
			script: 'dist/main.js',//实际启动脚本
			// args: 'run start',//参数
			autorestart: false, //自动重启
			error_file: '/data0/opt/hs-nest/logs/hs-nuxt-err.log',//错误日志
			out_file: '/data0/opt/hs-nest/logs/hs-nuxt-out.log', //正常运行日志
			// exec_mode: 'cluster_mode',// 应用启动模式，支持fork和cluster模式
			min_uptime: 100, //应用运行少于时间被认为是异常启动
			// restart_delay: 60,//重启时延
			// instance: 4,//开启4个实例，仅在cluster模式有效，用于负载均衡
			// watch: ['.nuxt', 'nuxt.config.js'],//监控变化的目录
			// watch_delay: 1000,//监控时延
			// ignore_watch: ['node_modules'],//从监控目录中排除
			// watch_options: { // 监听配置
			// 	'followSymlinks': false,
			// 	'usePolling': true
			// }
		}
	]
}