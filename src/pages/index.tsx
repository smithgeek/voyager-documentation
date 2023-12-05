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
			<HomepageHeader />
			<main>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexDirection: "row",
						justifyContent: "space-evenly",
						padding: "1rem",
					}}
				>
					<div style={{ flex: 1 }}>
						<CodeBlock language="csharp">{RequestSource}</CodeBlock>
					</div>
					<div style={{ flex: 1 }}>
						<CodeBlock language="csharp">
							{ResponseSource}
						</CodeBlock>
					</div>
				</div>
				<div style={{ padding: "1rem" }}>
					<CodeBlock language="csharp">{EndpointSource}</CodeBlock>
				</div>
			</main>
		</Layout>
	);
}
