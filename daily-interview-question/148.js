/**
 * 第 148 题： webpack 中 loader 和 plugin 的区别是什么
 * loader：是一个转换器，把a文件进行编译成b文件，例如，讲a.less转换为a.css，单纯的文件转换过程
 * plugin：是一个扩展器，它丰富了webpack本身，是针对loader结束后，webpack打包的整个过程，它不是直接操作文件，
 * 而是基于事件工作机制，会监听webpack打包过程中的某些节点，执行广泛的任务
 */
