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
			<div className="container py-2">
				{/* <Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading> */}
				<p>
					<span>
						Define endpoints in their own class throughout your code
						base and have voyager wire them up for you with it's
						source generator. There is no performance penalty
						because the work is done during compilation!
					</span>
					<span className="font-extrabold mx-1 text-blue-500">
						No interfaces to implement or base classes to inherit
					</span>
					<span>
						from. Just write the logic and let voyager write the
						boilerplate.
					</span>
				</p>
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
				<HomepageHeader />
				<div className="px-2">
					<CodeBlock className="max-w-[94vw]" language="csharp">
						{EndpointSource}
					</CodeBlock>
				</div>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting-started"
					>
						Get Started
					</Link>
				</div>
				<main>
					<div className="flex gap-2 justify-evenly p-2 flex-col">
						<div className="flex-1">
							<span className="text-lg">Request</span>
							<CodeBlock
								className="max-w-[94vw]"
								language="csharp"
							>
								{RequestSource}
							</CodeBlock>
						</div>
						<div className="flex-1">
							<span className="text-lg">Response</span>
							<CodeBlock
								className="max-w-[94vw]"
								language="csharp"
							>
								{ResponseSource}
							</CodeBlock>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
