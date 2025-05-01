// import Image from "next/image";
import { Container } from '@mui/material';
import backgroundLeft from '../../public/backgroundLeft.png';
import backgroundRight from '../../public/backgroundRight.png';
import Fav from '@/components/Fav';

export default function Home() {
  return (
    <Container
      sx={{ backgroundImage: `url(${backgroundLeft.src}), url(${backgroundRight.src})`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center, center center',
        backgroundSize: '100% 100%',
        minHeight: '100vh'
    }}
      disableGutters={true}
      maxWidth={false}
    >
      <Fav />
    </Container>
  );
}
