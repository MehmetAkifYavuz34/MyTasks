import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-nativejs';
import {AppColors} from '../theme/color';

export const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLETED: 3,
  CANCEL: 4,
};

export const taskValues = [
  {
    status: 1,
    title: 'OnGoing',
    color: AppColors.ONGOİNG,
    icon: <ChartCircle size={32} color={AppColors.WHİTE} />,
  },
  {
    status: 2,
    title: 'Pending',
    color: AppColors.PENDİNG,
    icon: <Clock size={32} color={AppColors.WHİTE} />,
  },
  {
    status: 3,
    title: 'Cpmplated',
    color: AppColors.COMPLATED,
    icon: <TickCircle size={32} color={AppColors.WHİTE} />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size={32} color={AppColors.WHİTE} />,
  },
];
