interface ICategoryProps {
  params: {
    category: string[];
    searchParams?: {
      search?: string;
    };
  };
}

export default function Category(props: ICategoryProps) {
  // throw new Error('Client-side error!');
  const { category } = props.params;
  return <h1>Dynamic Category: {category}</h1>;
}
