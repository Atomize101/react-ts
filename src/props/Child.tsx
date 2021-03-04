interface ChildProps {
	color: string;
}

export const Child = ({ color }: ChildProps) => {
	return <div>{color}</div>;
};

// The style below shows that the function is a react component
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
	return <div>{color}</div>;
};
