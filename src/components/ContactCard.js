import React from "react";

import Divider from "@material-ui/core/Divider";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationIcon from "@material-ui/icons/LocationOn";

import * as styles from "../styles/components/contactcard.module.scss";

function ContactCard() {
	return (
		<div className={styles.card}>
			<h2 className={styles.cardTitle}>Get In Touch</h2>
			<Divider light className={styles.cardDivider} />
			<div className={styles.cardContentContainer}>
				<a className={styles.cardContent} href="mailto:contact@mail.com">
					<div className={styles.cardContentIcon}>
						<MailIcon />
					</div>
					<div className={styles.cardContentDetail}>
						<b>Mail Us:</b>
						<br />
						contact@mail.com
					</div>
				</a>
				<a className={styles.cardContent} href="tel:+919876543210">
					<div className={styles.cardContentIcon + " " + styles.alternate}>
						<PhoneIcon />
					</div>
					<div className={styles.cardContentDetail}>
						<b>Call Us:</b>
						<br />
						+91 99876543210
					</div>
				</a>
				<div className={styles.cardContent}>
					<div className={styles.cardContentIcon}>
						<LocationIcon />
					</div>
					<div className={styles.cardContentDetail}>
						<b>Visit Us:</b>
						<br />
						D. J. Sanghavi College of Engineering,
						<br />
						Vile Parle, Mumbai - 400 055
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
