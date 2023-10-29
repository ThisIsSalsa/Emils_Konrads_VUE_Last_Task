<template>
    <div class="song-filter">
        <button
            :class="{ active: activeFilter === 'none' }"
            @click="setActiveFilter('none')"
        >
            None
        </button>
        <button
            :class="{ active: activeFilter === 'song' }"
            @click="setActiveFilter('song')"
        >
            Name
        </button>
        <button
            :class="{ active: activeFilter === 'artist' }"
            @click="setActiveFilter('artist')"
        >
            Artist
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeFilter: 'none',
        };
    },
    methods: {
        setActiveFilter(filter) {
            this.activeFilter = filter;
            this.$emit('filter', filter);
        },
    },
};
</script>

<style scoped>
.song-filter {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: #FB0048;
    background-color: #191621;
    font-size: 16px;
    cursor: pointer;
}

button.active {
    
    background-color: #FB004833;
}
</style>