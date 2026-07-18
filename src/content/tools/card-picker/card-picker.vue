<script setup lang="ts">

import cards from '@younestouati/playing-cards-standard-deck';
import { exhaustiveUniqueRandom } from 'unique-random';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const cardKeys = [...Object.keys(cards).filter(k => k !== 'joker')];
const hasCardSvgs = cardKeys.length > 0;
type CardNames = keyof typeof cards;

const numberOfCards = useQueryParamOrStorage({ name: 'cards', storageName: 'card-picker:n', defaultValue: 5 });
const numberOfPacks = useQueryParamOrStorage({ name: 'packs', storageName: 'card-picker:p', defaultValue: 1 });
const useJokers = useQueryParamOrStorage({ name: 'jokers', storageName: 'card-picker:j', defaultValue: true });
const [cardPicked, refreshCardPicked] = computedRefreshable(() => {
  const deck = useJokers.value ? [...cardKeys, 'joker', 'joker'] : cardKeys;
  let cardNumbers: number[] = [];
  for (let pack = 0; pack < numberOfPacks.value; pack++) {
    cardNumbers = [...cardNumbers, ...Array.from({ length: deck.length }, (_, num) => num)];
  }

  const random = exhaustiveUniqueRandom(0, cardNumbers.length - 1);
  return Array.from({ length: numberOfCards.value }, () => deck[cardNumbers[random()]]);
});
const maxCards = computed(() => (useJokers.value ? 54 : 52) * numberOfPacks.value);

const suitNames = {
  c: 'clubs (♣)',
  d: 'diamonds (♦)',
  h: 'hearts (♥)',
  s: 'spades (♠)',
};
const numberNames = {
  1: 'Ace',
  11: 'Jack',
  12: 'Queen',
  13: 'King',
};
function translateName(cardId: string) {
  const [, number, suit] = /(\d+)([cdhs])/.exec(cardId) || [];
  if (!number && !suit) {
    return cardId;
  }
  return `${numberNames[number as never] || number} of ${suitNames[suit as never] || suit}`;
}

const cardPickedString = computed(() => cardPicked.value.map(translateName).join(', '));

const { copy } = useCopy({ source: cardPickedString, text: "Cards Picked copied to the clipboard" });
</script>

<template>
  <c-card>
    <n-space justify="space-around" mb-1>
      <img
        v-if="hasCardSvgs"
        v-for="(card, index) in cardPicked"
        :key="index"
        style="width:90px"
        mr-1
        :src="`data:image/svg+xml;base64,${cards[card as CardNames]}`"
      >
    </n-space>
    <div mb-2>
      <textarea-copyable :value="cardPickedString" readonly mb-1 />
    </div>
    <div flex justify-center gap-3>
      <n-form-item label="Number of cards:" label-placement="left">
        <NInputNumber v-model:value="numberOfCards" min="1" :max="maxCards" placeholder="Number of cards to pick" />
      </n-form-item>
      <n-form-item label="Number of packs:" label-placement="left">
        <NInputNumber v-model:value="numberOfPacks" min="1" placeholder="Number of card packs to pick in" />
      </n-form-item>
    </div>
    <div mb-4 flex justify-center>
      <n-checkbox v-model:checked="useJokers">
        Use Jokers
      </n-checkbox>
    </div>
    <div flex justify-center gap-3>
      <c-button @click="copy()">
        Copy deck
      </c-button>
      <c-button @click="refreshCardPicked">
        Refresh deck
      </c-button>
    </div>
  </c-card>
</template>
