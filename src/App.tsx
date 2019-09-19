import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import dojo from '@dojo/themes/dojo';

import * as css from './App.m.css';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}
	return (
		<div classes={[css.root]}>
			UI 部件 web 版，是 BlockLang 标准库。
		</div>
	);
});
