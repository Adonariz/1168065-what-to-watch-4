import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`TabsComponent e2e test`, () => {
  it(`should tab be clicked`, () => {
    const onLinkClick = jest.fn();

    const tabs = shallow(
        <Tabs onLinkClick={onLinkClick} />
    );

    const listItems = tabs.find(`.movie-nav__item`);
    listItems.forEach((item) => item.simulate(`click`));
    expect(onLinkClick).toHaveBeenCalledTimes(listItems.length);
  });
});
