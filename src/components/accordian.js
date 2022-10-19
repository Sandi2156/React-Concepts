import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Inner,
	Item,
	Body,
	Frame,
	Title,
	Header,
} from "./accordian.styles";

const ToggleContext = createContext();
export default function Accordian({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordian.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordian.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(true);
	return (
		<ToggleContext.Provider
			value={{ isShown: toggleShow, toggleIsShown: setToggleShow }}
		>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};
Accordian.Header = function AccordionHeader({ children, ...restProps }) {
	const { isShown, toggleIsShown } = useContext(ToggleContext);
	return (
		<Header onClick={() => toggleIsShown(!isShown)} {...restProps}>
			{children}
		</Header>
	);
};
Accordian.Body = function AccordionHeader({ children, ...restProps }) {
	const { isShown } = useContext(ToggleContext);
	return (
		<Body className={isShown ? "open" : "close"}>
			<span>{children}</span>
		</Body>
	);
};
