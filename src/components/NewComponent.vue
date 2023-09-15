<template>
  <div></div>
</template>

<script setup>
import {
  onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted,
  ref, reactive, computed, watch, watchEffect, PropType
} from 'vue';
const props = defineProps({
  title: { type: String, default: () => { return '' } }
})
const emit = defineEmits(['test', 'update:title'])

const str = ref('');
const number1 = ref(0);
const arr = reactive([]);
const obj = reactive({});

const calData = computed(() => {
	return number1.value + 3;
});

watch(number1, (newValue, oldValue) => {
  console.log('number1 changed:', newValue);
});

watchEffect(() => {
	console.log('number - ', number1.value);
}, {
	flush: 'post'
	// 'pre'가 기본값
	// 'pre'는 돔이 업데이트 하기전에 콜백함수 호출
	// 'post' 돔이 업데이트된 후 콜백함수 호출
});

const test1 = () => {
	emit('test', 10);
};

onBeforeMount(() => {
	// DOM 생성 전
})
onMounted(() => {
	// DOM 생성 후
})
onBeforeUpdate(() => {
	// state가 업데이트 되기전
});
onUpdated(() => {
	// state가 업데이트 된 후
});
onBeforeUnmount(() => {
	// 컴포넌트가 소멸되기전
});
onUnmounted(() => {
	// 컴포넌트가 소멸된 후
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
</style>
