import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from '@mui/material';
import {ProfileType} from '@/types/card/ProfileType';
import {uniqueId} from 'lodash';

export default function ProfileCard({avatarSrc, title, subHeader, content}: ProfileType) {
	const createContentList = () =>
		content.map((item) => (
			<ListItemButton dense key={uniqueId()}>
				<ListItemIcon>
					<item.icon fontSize='small' />
				</ListItemIcon>
				<ListItemText>
					<Typography variant='h6'>{item.text}</Typography>
				</ListItemText>
				<ListItemSecondaryAction>
					<Typography variant='h6'>{item.value}</Typography>
				</ListItemSecondaryAction>
			</ListItemButton>
		));
	return (
		<Card>
			<CardHeader avatar={<Avatar src={avatarSrc} />} title={title} subheader={subHeader} />
			<Divider />
			<CardContent>
				<List>{createContentList()}</List>
			</CardContent>
		</Card>
	);
}
