interface ICategoryProps {
  params: {
    category: string[];
    searchParams?: {
      search?: string;
    };
  };
}

export default function Category(props: ICategoryProps) {
  const { category } = props.params;
  return <h1>Dynamic Category: {category}</h1>;
}
