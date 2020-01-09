import { create, tsx } from "@dojo/framework/core/vdom";
import * as css from "./index.m.css";

export interface PageProperties {
	// 一个页面只执行一次，当加载完之后重新渲染页面
	onLoad?: () => void;
}

const factory = create().properties<PageProperties>();

export default factory(function Page({ properties, children }) {
	const { onLoad } = properties();
	onLoad && onLoad();

	return (
		<div key="root" classes={[css.root]}>
			{children()}
		</div>
	);
});
