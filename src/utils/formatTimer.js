export default function formatTimer(timer) {
    return ('0' + timer).slice(-2);
}

export function formatTime(timer){
    const seconds = timer % 60;
    const minutes = parseInt((timer % 60) / 60);
    const hours = parseInt(timer / 60 / 60);
    
    return `${formatTimer(hours)}h : ${formatTimer(minutes)}m : ${formatTimer(seconds)}s`
}

export const timestampToDayMonthYear = (number) => {
    const date = new Date(number)
    const formattedDate = date.toLocaleDateString()
    return formattedDate
  }