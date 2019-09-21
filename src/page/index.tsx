import { tsx} from '@dojo/framework/core/vdom';
import * as css from './index.m.css';
import WidgetBase from '@dojo/framework/core/WidgetBase';

export interface PageProperties {
    onLoad: () => void; // 一个页面只执行一次，当加载完之后重新渲染页面
}

export default class Page extends WidgetBase<PageProperties> {
    protected render() {
        return (
            <div key="page" classes={[css.root]}>{this.children}</div>
        );
    }
}