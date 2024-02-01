import EnvIndicator from "@/app/components/EnvIndicator";

const getDummyUsers = async () => {
	const res = await fetch("https://dummyjson.com/users");
	console.log(res.status);
	return res.json();
};

const Page = async () => {
	const dummyUsers = await getDummyUsers();
	return (
		<>
			<h1>app/page.tsx</h1>
			<h2>Dummy Users</h2>
			<pre>{JSON.stringify(dummyUsers, null, 2)}</pre>
			<EnvIndicator />
		</>
	);
};

export default Page;
