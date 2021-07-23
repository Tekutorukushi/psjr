import { HourglassIcon, IconPencil } from '@app/ui/icons';

import style from "./acticle_informers.module.scss";

interface ArticleInformersProps {
	type?: string;
	date?: string;
	time?: string;
}

export const ArticleInformers = ({ type, date, time }: ArticleInformersProps) => {
	return (
		<div className={style.info}>
			{type &&
				<div className={style.row}>
				  <div className={style.type}>{type}</div>
				</div>
			}
			<div className={style.row}>
				<IconPencil className={style.icon} />
				<span>{date}</span>
			</div>
			<div className={style.row}>
				<HourglassIcon className={style.icon} />
				<span>Читать {time}</span>
			</div>
		</div>
	)
}