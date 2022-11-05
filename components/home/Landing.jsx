import styles from '../../styles/home/Landing.module.css'

const Landing = () => {
	return (
		<div id={styles.landing}>
			<div className={styles.landing_section_container}>
				<div className={styles.landing_section_text}>
					<h1 className={styles.landing_name}>Eli Ameshie</h1>
					<p className={styles.landing_text}>Software Engineer</p>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}


export default Landing;
