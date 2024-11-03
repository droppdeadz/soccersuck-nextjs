// pages/index.tsx
import axiosInstance from "@/services/axiosInstance"
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { TopicProps } from "@/interfaces/topic";

interface HomeProps {}

export default function Home({}: Readonly<HomeProps>) {
  const [data, setData] = useState<TopicProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('https://jnrhynndhe.execute-api.ap-southeast-1.amazonaws.com/default/newsfeed/', {
        params: {
          limit: 10
        }
      });
      setData(response.data);
      return;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
    return () => {}
  }, [])
;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
            data.map((topic: TopicProps) => (
              <Grid
                key={topic.id}
                size={{
                  xl: 3,
                  lg: 4,
                  md: 6,
                }}
              >
                <Card>
                  <CardMedia
                    sx={{
                      aspectRatio: 4/2.5
                    }}
                    image={topic.imgUrl || '/assets/no-image.jpg'}
                    title={topic.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {topic.title}
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {topic.content}
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
      {/* "content": "การท่าเรือ เอฟซี แถลงกรณี “โค้ชอ้น” รังสรรค์ วิวัฒน์ชัยโชค ประกาศลาออกจากตำแหน่งหัวหน้าผู้ฝึกสอน ด้วยตนเอง ในห้องแถลงข่าว หลังจบเกมที่พาทีมบุกไปแพ้ ทรู แบงค็อกฯ 2-0 ในศึกไทยลีก วันที่ 2 พศฤจิกายน 2567 \n\n“ที่ผ่านมา สโมสรฯ ได้ให้การสนับสนุนการทำงานของ รังสรรค์ วิวัฒน์ชัยโชค มาโดยตลอด และ ให้สิทธิ์ในการทำทีมอย่างเต็มที่ ทั้งในแง่การเปลี่ยนแปลง และ เลือกตัวผู้เล่น ทั้งนักเตะไทยและ ต่างชาติ\n\nการประกาศลาออกด้วยตนเองอย่างกะทันหัน โดยไม่ได้แจ้งให้สโมสรฯ รับทราบก่อน ทำให้สโมสรฯ ตกอยู่ในสถานการณ์ลำบาก เนื่องจากมีโปรแกรมเดินทางไปแข่งขันฟุตบอล เอเอฟซี แชมเปี้ยนส์ลีก 2 ฤดูกาล 2024/25 รอบแบ่งกลุ่ม ที่จีน พบกับ เจ้อเจียงฯ ในวันที่ 7 พฤศจิกายน 2567 \n\nแต่เมื่อ “โค้ชอ้น” ได้ตัดสินใจลาออกไปแล้ว ด้วยระยะเวลาที่กระชั้นนั้น สโมสรฯ จึงต้องมอบหมายให้ โชคทวี พรหมรัตน์ ผู้ช่วยผู้ฝึกสอน ขึ้นมาทำหน้าที่รักษาการณ์หัวหน้าผู้ฝึกสอนชั่วคราว เพื่อให้สโมสรฯ เดินหน้าต่อไป และ นำทีม เดินทางไปแข่งขัน ฟุตบอลเอเอฟซี แชมเปี้ยนส์ลีก ที่ประเทศจีน ในวันที่ 5 พฤศจิกายนนี้ ซึ่งทีมงานสตาฟฟ์โค้ช และ นักเตะ ยืนยันว่าพร้อมสู้ต่อไปกับสถานการณ์ที่ยากลำบากที่เกิดขึ้น เพื่อสโมสรฯ , เพื่อแฟนบอล และ เพื่อศักดิ์ศรีในฐานะตัวแทนจากประเทศไทย ต่อจากนั้นจึงจะมีการพิจารณาหัวหน้าผู้ฝึกสอนคนใหม่โดยเร่งด่วนต่อไป\n\nอย่างไรก็ตาม สโมสรการท่าเรือ เอฟซี ขอขอบคุณในผลงานที่ผ่านมา และขออำนวยพรให้ โค้ชอ้น ประสบความสำเร็จในการทำหน้าที่หัวหน้าผู้ฝึกสอนต่อไป”",
  "category": "thailand",
  "id": "2505353",
  "crawledDate": "2024-11-03",
  "imgUrl": "",
  "title": "‘โชคท */}
    </>
  );
}
