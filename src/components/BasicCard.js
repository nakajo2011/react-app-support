// 他のモジュールから取り込む
import * as React from 'react';
import {createContext, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Contextっていうグローバル変数みたいなものを使って本文をstring型の配列で定義
export const BodyText = createContext()

//　関数の呼び出し
export default function BasicCard(props) {
    // const,letで指定。varはあまり使わない
    const {classes} = props;
    // 最初に表示するスライド定義
    const [initialIndex, setInitialIndex] = useState(0);
    // タイトル
    const [text, setText] = useState(["新しいページ"])
    // ナビゲーション
    const swiperRef = React.useRef();

    // 渡された値をコンソールに表示する、どんな型でもOK
    console.log(text);

    // 左の三角ボタンを押すと次々変わる
    function handleClick(e) {
        // Swiper Navigationを使って1つ前のスライドを表示
        swiperRef.current?.slidePrev()
    }

    function randomClick(e) {
        let size = text.length
        var index = Math.floor(Math.random() * size)
        while (index === swiperRef.current?.activeIndex && size > 1) {
            index = Math.floor(Math.random() * size)
        }
        // 今作ったページを表示するようにする
        // TODO: 最後のページの1つ前しか表示されない。SwiperSlideがまだ増えてないのが原因と思われる。
        swiperRef.current?.slideTo(index)
    }

    // 右の三角をクリックすると次のページに移る
    function handleRightClick(e) {
        // Swiper Navigationを使って次のスライドを表示
        swiperRef.current?.slideNext()
    }

    // 新しい本文を作成
    function createNewText(e) {
        console.log(text)

        const len = text.length
        // 一番後ろに新しいページを作成
        setText([...text, `新しいページ${len}`])
        // 今作ったページを表示するようにする
        swiperRef.current?.slideTo(text.length)
    }

    function getSlideList() {
        const list = []
        text.forEach((t) => {
            list.push(
                <SwiperSlide>
                    <Card sx={{ m: 1, height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}>
                        <CardContent id="MyCardContent" >
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                {t}
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            )
        })
        return list
    }

    return (
        <Box
            xs={{width: '60rem'}}>
            <Grid
                container
                spacing={0}
                // direction="column"
                alignItems="center"
                justifyContent="center"
                align="center"

                // style={{ minHeight: '100vh' }}
                sx={{p: 1}}
            >

                <Grid item xs={2} sx={{mb: 55}}>
                    <img src="./img/sea10hennkou.png" alt="my image" width="85px"/>
                </Grid>
                <Grid item xs={8} sx={{mb: 10}}>
                    <BodyText.Provider value={{text, setText}}>
                        <Swiper
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {getSlideList()}
                        </Swiper>
                    </BodyText.Provider>
                </Grid>
                <Grid item xs={2} sx={{mb: 40}}>
                    <img src="./img/plus.png" alt="my image" width="88px" onClick={createNewText}/>
                </Grid>
                <Grid item xs={4}>
                    <img src="./img/left.png" alt="my image" width="80px" onClick={handleClick}/>
                </Grid>
                <Grid item xs={4}>
                    <img src="./img/sh.png" alt="my image" width="160px" onClick={randomClick}/>
                </Grid>
                <Grid item xs={4}>
                    <img src="./img/right.png" alt="my image" width="86px" onClick={handleRightClick}/>

                </Grid>
            </Grid>
        </Box>
    )
}
