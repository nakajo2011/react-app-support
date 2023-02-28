// 他のモジュールから取り込む
import * as React from 'react';
import  { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CardBody from './CardBody'

//　関数の呼び出し
export default function BasicCard(props) {
  // const,letで指定。varはあまり使わない
  const { classes } = props;
  // カウント定義
  const [count, setCount] = useState(0);
  // タイトル
  const arr =["Red", "Green", "Blue", "Black", "White"];
  // 渡された値をコンソールに表示する、どんな型でもOK
  console.log(arr);

// 左の三角ボタンを押すと次々変わる
  function handleClick(e) {
    // 押す度に前のページへ
    let newCount = count-1
    // 値を表示
    console.log(newCount)
    // カウントが０以下であれば４の値に戻る
    if(newCount < 0) {
      newCount = 4
    }
    // 次のステートを直接引数で受け取るインターフェイス
    setCount(newCount)
  }

  function randomClick(e){
    let size = arr.length
    var index = Math.floor(Math.random()*size)
    while (index == count) {
      index = Math.floor(Math.random()*size)
    }
    console.log(index)
    setCount(index)
   }

// 右の三角をクリックすると次のページに移る
  function handleRightClick(e) {
    // 押す度に前のページへ
    let newCount = count+1
    // 値を表示
    console.log(newCount)
    // カウントが4以上であれば０の値にも戻る
    if(newCount > 4) {
      newCount = 0
    }
    // 次のステートを直接引数で受け取るインターフェイス
    setCount(newCount)
  }

  return (
    <Box
    xs={{ width: '60rem' }}>
    <Grid
      container 
      spacing={0}
      // direction="column"
      alignItems="center"
      justifyContent="center"
      align="center"
      
      // style={{ minHeight: '100vh' }}
      sx={{ p: 1 }}
    >
      
      <Grid item xs={2} sx={{mb: 55}}>
        <img src="./img/sea10hennkou.png" alt="my image" width="85px" />
      </Grid>
      <Grid item xs={8} sx={{mb: 10}}>
        <CardBody arr={arr} index={count}/>
      </Grid>
      <Grid item xs={2} sx={{mb: 40}}>
        <img src="./img/plus.png" alt="my image" width="88px" />
      </Grid>
      <Grid item  xs={4}>
        <img src="./img/left.png" alt="my image" width="80px" onClick={handleClick}/>
      </Grid>
      <Grid item xs={4}>
        <img src="./img/sh.png" alt="my image" width="160px" onClick={randomClick} />
      </Grid>
      <Grid item xs={4}>
        <img src="./img/right.png" alt="my image" width="86px" onClick={handleRightClick}/>

      </Grid>
    </Grid>
    </Box>
  )
}
