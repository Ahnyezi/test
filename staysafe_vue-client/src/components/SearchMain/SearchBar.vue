<template>
    <v-container>
        <v-card class="d-flex justify-center">
             <v-card>
                <v-text-field
                    v-model="searchWord"
                    :placeholder="placeholder"
                    filled
                    rounded
                    dense
                    clearable
                    />
            </v-card>
             <v-card>
                <v-btn @click="setSearchWord" icon color="indigo">
                    <v-icon>fas fa-search</v-icon>
                </v-btn>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        searchWord:"",
        placeholder:"복용 중인 약 이름을 입력하세요"
    }),
    methods: {
        handleSearchWord({ keyCode }) {
            const { text } = this;
            console.log("text" + text);
            if (keyCode === 13 && text !== "") {
                this.$emit("getSearchWord", text);
                console.log(text);
            }
        },
        setSearchWord() {
            this.$emit("getSearchWord", this.searchWord);
            this.searchWord = "";
        },
    },
    watch: {
        searchWord(text) {
            this.$emit("getRealtimeSearchWord", text);
        },
    },
};
</script>
<style scoped>
.v-text-field{
    width: 500px;
}
</style>