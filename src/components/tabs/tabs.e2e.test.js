import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";
import {Tab} from "../../const";

const Settings = {
  currentTab: `overview`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`TabsComponent e2e test`, () => {
  it(`should tab be clicked`, () => {
    const onLinkClick = jest.fn();

    const tabs = shallow(
        <Tabs
          onLinkClick={onLinkClick}
          currentTab={Settings.currentTab}
        />
    );

    const listItems = tabs.find(`.movie-nav__item`);
    listItems.forEach((item) => item.simulate(`click`));

    expect(onLinkClick).toHaveBeenCalledTimes(listItems.length);
    expect(onLinkClick.mock.calls[0][0]).toBe(Tab.OVERVIEW);
    expect(onLinkClick.mock.calls[1][0]).toBe(Tab.DETAILS);
    expect(onLinkClick.mock.calls[2][0]).toBe(Tab.REVIEWS);
  });
});
