<template>
    <transition name="fade" appear>
        <div class="menu">
            <div v-if="type && type === 'day'">
                <li
                    :class="{ active: daySelected === day }"
                    v-for="day in 31"
                    @click="daySelected = day"
                    :key="day">{{ day }}</li>
            </div>
            <div v-if="type && type === 'month'">
                <li
                    :class="{ active: monthSelected === month }"
                    v-for="(month, i) in months"
                    @click="monthSelected = month"
                    :key="i">{{ month }}</li>
            </div>
            <div v-if="type && type === 'year'">
                <li 
                    :class="{ active: yearSelected === year }"
                    v-for="(year, i) in 150"
                    @click="yearSelected = (fullYear - year)"
                    :key="i">{{ fullYear - year }}</li>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'day'
        }
    },
    data() {
        return {
            months: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ],
            daySelected: null,
            monthSelected: null,
            yearSelected: null,
            fullYear: new Date().getFullYear()
        }
    },
    watch: {
        daySelected() {
            this.$emit('updateDay', this.daySelected)
        },

        monthSelected() {
            this.$emit('updateMonth', this.monthSelected)
        },

        yearSelected() {
            this.$emit('updateYear', this.yearSelected)
        }
    }
}
</script>