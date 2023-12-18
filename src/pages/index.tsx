import EndpointSource from "!!raw-loader!../components/HomepageFeatures/endpoint.cs";
import RequestSource from "!!raw-loader!../components/HomepageFeatures/request.cs";
import ResponseSource from "!!raw-loader!../components/HomepageFeatures/response.cs";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("", styles.heroBanner)}>
			<div className="container">
				{/* <Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading> */}
				<p>
					Define endpoints in their own class throughout your code
					base and have voyager wire them up for you with it's source
					generator. There is no performance penalty because the work
					is done during compilation! No interfaces to implement or
					base classes to inherit from. Just write the logic and let
					voyager write the boilerplate.
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting-started"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Documentation`}
			description="Easy way to set up minimal APIs."
		>
			<div className="max-w-7xl mx-auto my-2">
				<div className="px-2">
					<CodeBlock language="csharp">{EndpointSource}</CodeBlock>
				</div>
				<HomepageHeader />
				<main>
					<div className="flex gap-2 justify-evenly p-2 flex-col lg:flex-row">
						<div className="flex-1">
							<span className="text-lg">Request</span>
							<CodeBlock language="csharp">
								{RequestSource}
							</CodeBlock>
						</div>
						<div className="flex-1">
							<span className="text-lg">Response</span>
							<CodeBlock language="csharp">
								{ResponseSource}
							</CodeBlock>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
