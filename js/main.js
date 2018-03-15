    function calculateReplays() {
        var songLengthMinutes = 0;
        var songLengthSeconds = 0;
        var totalTimeSeconds = 0;
        var totalTimeMinutes = 0;
        var totalTimeHours = 0;

        totalTimeSeconds = jQuery('#s2_timeframe_seconds').val();
        totalTimeMinutes = jQuery('#s2_timeframe_minutes').val();
        totalTimeHours = jQuery('#s2_timeframe_hours').val();
        songLengthSeconds = jQuery('#s2_length_seconds').val();
        songLengthMinutes = jQuery('#s2_length_minutes').val();

        var result = (convertToSeconds(totalTimeSeconds, totalTimeMinutes, totalTimeHours)/convertToSeconds(songLengthSeconds, songLengthMinutes, 0));
        result = Math.floor(result);

        jQuery('#s2_result').text(result);
    }

    function calculateTime() {
        var replaysNumber = parseInt(jQuery('#s1_replays').val());
        var songLengthSeconds = parseInt(jQuery('#s1_length_seconds').val());
        var songLengthMinutes = parseInt(jQuery('#s1_length_minutes').val());
        var result = (replaysNumber * (songLengthSeconds+(60*songLengthMinutes)));

        jQuery('#s1_result').text(formatTime(result));
    }

    function convertToSeconds(seconds, minutes, hours) {
        return parseInt((parseInt(seconds) + (60*parseInt(minutes)) + (3600*parseInt(hours))));
    }

    function formatTime(seconds)
    {
        var date = new Date(1970,0,1);
        date.setSeconds(seconds);
        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }