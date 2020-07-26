import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

const Settings = {
  currentTab: `overview`
};

describe(`TabsComponent`, () => {
  it(`Should TabsComponent render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            onLinkClick={() => {}}
            currentTab={Settings.currentTab}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
