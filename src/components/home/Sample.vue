<template>
  <div class="container">
    <div class="my-5">
      <router-link class="btn btn-outline-primary" to="/hiragana">50음도</router-link>
      <HiraganaRow v-bind:row="hiragana"></HiraganaRow>
    </div>
    <hr>
    <div class="my-5">
      <router-link class="btn btn-outline-primary" to="/pronunciations1">발음1</router-link>
      <PronuOneRow v-bind:row="one"></PronuOneRow>
    </div>
    <hr>
    <div class="my-5">
      <router-link class="btn btn-outline-primary" to="/pronunciations2">발음1</router-link>
      <PronuTwoRow v-bind:row="one"></PronuTwoRow>
    </div>
    <hr>
    <div class="my-5">
      <router-link class="btn btn-outline-primary" to="/greetings">인사말</router-link>
      <GreetingRow v-bind:greeting="greeting"></GreetingRow>
    </div>
  </div>
</template>

<script>
import HiraganaRow from '../hiragana/Row.vue'
import PronuOneRow from '../pronunciationsOne/Row.vue'
import PronuTwoRow from '../pronunciationsTwo/Row.vue'
import GreetingRow from '../greetings/Row.vue'

export default {

  components: {
    HiraganaRow,
    PronuOneRow,
    PronuTwoRow,
    GreetingRow,
  },

  data() {
    return {
      hiragana: [
        {
          "character": "あ",
          "phonetic": "a",
          "word": "あり",
          "mean": "개미"
        },
        {
          "character": "い",
          "phonetic": "i",
          "word": "いぬ",
          "mean": "개"
        },
        {
          "character": "う",
          "phonetic": "u",
          "word": "うえ",
          "mean": "위"
        },
        {
          "character": "え",
          "phonetic": "e",
          "word": "えき",
          "mean": "역"
        },
        {
          "character": "お",
          "phonetic": "o",
          "word": "おに",
          "mean": "도깨비"
        }
      ],
      one: {
        "row": "が행",
        "description": "[が행]의 발음은 영어의 [g]와 같은 발음으로, 우리말의 [ㄱ]과는 다른 발음이므로 주의한다.",
        "characters": [
          {
            "character": "が",
            "phonetic": "ga",
            "word": "がいこく",
            "mean": "외국"
          },
          {
            "character": "ぎ",
            "phonetic": "gi",
            "word": "ぎんこう",
            "mean": "은행"
          },
          {
            "character": "ぐ",
            "phonetic": "gu",
            "word": "ぐんじん",
            "mean": "군인"
          },
          {
            "character": "げ",
            "phonetic": "ge",
            "word": "げた",
            "mean": "일본 나막신"
          },
          {
            "character": "ご",
            "phonetic": "go",
            "word": "ごはん",
            "mean": "밥"
          }
        ]
      },
      two: {
        "row": "1",
        "description": "[あ]단 글자 뒤에 [あ]가 오면 장음으로 발음한다.",
        "characters": [
          {
            "word": "おかあさん",
            "kanji": "お母さん",
            "mean": "어머니"
          },
          {
            "word": "おばあさん",
            "kanji": "お婆さん",
            "mean": "할머니"
          },
          {
            "word": "まあまあ",
            "mean": "그럭저럭"
          }
        ]
      },
      greeting: {
        "subject": "소개",
        "sentences": [
          {
            "mean": "처음 뵙겠습니다. 아무쪼록 잘 부탁드립니다.",
            "characters": [
              {
                "base": "はじめまして。どうぞよろしくお"
              },
              {
                "base": "願",
                "ruby": "ねが"
              },
              {
                "base": "いします。"
              }
            ]
          },
          {
            "mean": "저야말로 잘 부탁드립니다.",
            "characters": [
              {
                "base": "こちらこそ、どうぞよろしくお"
              },
              {
                "base": "願",
                "ruby": "ねが"
              },
              {
                "base": "いします。"
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
