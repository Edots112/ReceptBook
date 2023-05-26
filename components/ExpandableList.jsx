const ExpandableList = ({
	items,
	initialNumItems = 5,
	isExpanded,
	setIsExpanded,
}) => {
	const shownItems = isExpanded ? items : items.slice(0, initialNumItems);

	return (
		<div>
			<ul className='text-info-emphasis'>
				{shownItems.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
			{items.length > initialNumItems && (
				<button
					className='btn btn-primary btn-sm mb-2 mt-2 text-uppercase font-weight-bold shadow rounded border border-primary w-100 text-center text-uppercase text-white'
					onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? "Show Less" : "Show More"}
				</button>
			)}
		</div>
	);
};

export default ExpandableList;
