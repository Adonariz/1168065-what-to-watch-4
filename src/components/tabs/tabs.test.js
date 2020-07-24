import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

describe(`TabsComponent`, () => {
  it(`Should TabsComponent render correctly`, () => {
    const tree = renderer
      .create(<Tabs
        onLinkClick={() => {}}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
