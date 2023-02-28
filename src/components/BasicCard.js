// 他のモジュールから取り込む
import * as React from 'react';
import  { createContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Slide } from '@mui/material';
import CardBody from './CardBody'
// Contextっていうグローバル変数みたいなものを使って本文をstring型の配列で定義
export const BodyText = createContext()
//　関数の呼び出し
export default function BasicCard(props) {
  // const,letで指定。varはあまり使わない
  const { classes } = props;
  // カウント定義
  const [count, setCount] = useState(0);
  const [checked, setChecked] = React.useState(true);
  // タイトル
  const [text, setText] = useState(["新しいページ"])
  // 渡された値をコンソールに表示する、どんな型でもOK
  console.log(text);
  // 左の三角ボタンを押すと次々変わる
  function handleClick(e) {
    // TとFを反転
    const newChecked = !checked
    setChecked(newChecked);
    // 押す度に前のページへ
    let newCount = count-1
    // 値を表示
    console.log(newCount)
    // カウントが０以下であれば最後の記事に戻る
    if(newCount < 0) {
      newCount = text.length-1
    }
    // 次のステートを直接引数で受け取るインターフェイス
    setCount(newCount)
  }
  function randomClick(e){
    const newChecked = !checked
    setChecked(newChecked);
    let size = text.length
    var index = Math.floor(Math.random()*size)
    while (index === count && size > 1) {
      index = Math.floor(Math.random()*size)
    }
    console.log(index)
    setCount(index)
   }
  // 右の三角をクリックすると次のページに移る
  function handleRightClick(e) {
    const newChecked = !checked
    setChecked(newChecked);
    // 押す度に前のページへ
    let newCount = count+1
    // 値を表示
    console.log(newCount)
    // カウントが記事数以上であれば０の値に戻る
    if(newCount >= text.length) {
      newCount = 0
    }
    // 次のステートを直接引数で受け取るインターフェイス
    setCount(newCount)
  }
  // 新しい本文を作成
  function createNewText(e) {
    console.log(text)
    const newChecked = !checked
    setChecked(newChecked);
    const len = text.length
    // 一番後ろに新しいページを作成
    setText([...text, `新しいページ${len}`])
    // 今作ったページを表示するようにする
    setCount(text.length-1)
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
      
	<div class></div>
      <Grid container direction="colum" xs={12} sx={{
        height: "500px"
      }}>
        <Grid item xs={2} sx={{mb: 55}}>
          {/* <img src="./img/sea10hennkou.png" alt="my image" width="85px" /> */}
        </Grid>
        <Grid item xs={8} sx={{mb: 10}}>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit> 
            <Grid item xs={12} sx={{mb: 12}}>
              <BodyText.Provider value={{text, setText}}>
                <CardBody index={count}/>
              </BodyText.Provider>
            </Grid>
          </Slide>
          <Slide direction="up" in={!checked} mountOnEnter unmountOnExit> 
            <Grid item xs={12} sx={{mb: 12}}>
              <BodyText.Provider value={{text, setText}}>
                <CardBody index={count}/>
              </BodyText.Provider>
            </Grid>
          </Slide>
        </Grid>
        <Grid item xs={2} sx={{mb: 57 }}>
          <img src="./img/plus.png" alt="my image" width="88px" onClick={createNewText}/>
        </Grid>
      </Grid>
      <Grid container direction="colum" xs={12}>
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
    </Grid>
    </Box>
  )
}
