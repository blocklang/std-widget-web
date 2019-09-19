import { create, tsx } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import * as css from './index.m.css';

interface PageProperties {
    onLoad: () => void; // 一个页面只执行一次，当加载完之后重新渲染页面
}

const factory = create({ theme }).properties<PageProperties>();

export default factory(function Page({ middleware: { theme }, properties }) {
	const {  } = properties();
    const {root} = theme.classes(css);
    return (
        <div classes={[root]}></div>
    );
});
