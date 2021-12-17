function number(accum = 0) {
  const statistic = {
increase: 0,
decrease: 0,
get: 0,
getStatistic: 0,
  };
    return {
        increase (num) {
            statistic.increase++; 
            return (accum += num);
        },
        decrease (num) {
            statistic.decrease++;
            return (accum -= num);
        },
        get () {
            statistic.get++;
            return accum;
        },
        getStatistic () {
            statistic.getStatistic++;
            return statistic;
        },
        clearCount () {
            return accum = 0;
        }
    }
}
  
  const result = number(3);
  console.log(result.increase(4));
  

