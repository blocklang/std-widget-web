const { describe, it } = intern.getInterface("bdd");
const { assert } = intern.getPlugin("chai");

import assertionTemplate from "@dojo/framework/testing/harness/assertionTemplate";
import harness from "@dojo/framework/testing/harness/harness";
import { tsx } from "@dojo/framework/core/vdom";
import Page from "../../../src/page";
import * as css from "../../../src/page/index.m.css";
import { stub } from "sinon";

describe("Page", () => {
	const baseAssertion = assertionTemplate(() => <div key="root" classes={[css.root]}></div>);

	it("default properties", () => {
		const h = harness(() => <Page />);
		h.expect(baseAssertion);
	});

	it("onLoad event", () => {
		const onLoadStub = stub();
		const h = harness(() => <Page onLoad={onLoadStub} />);
		h.expect(baseAssertion);
		assert.isTrue(onLoadStub.calledOnce);
	});

	it("children", () => {
		const childrenAssertion = baseAssertion.setChildren("@root", () => ["Hello"]);

		const h = harness(() => <Page>Hello</Page>);
		h.expect(childrenAssertion);
	});
});
