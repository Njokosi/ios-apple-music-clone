export function Play(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M32.997 18.268c1.334.77 1.334 2.695 0 3.464L13 33.27c-1.333.769-2.999-.194-2.999-1.733V8.463c0-1.54 1.666-2.502 3-1.733l19.997 11.538z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Pause(props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={21.8426}
        y={6}
        width={8.2963}
        height={28}
        rx={2.07407}
        fill="currentColor"
      />
      <rect
        x={9.65741}
        y={6}
        width={8.2963}
        height={28}
        rx={2.07407}
        fill="currentColor"
      />
    </svg>
  );
}

export function Skip(props) {
  return (
    <svg viewBox="0 0 48 28" fill="none" {...props}>
      <g>
        <path
          d="M22.997 12.268c1.334.77 1.334 2.695 0 3.464L3 27.27C1.666 28.039 0 27.076 0 25.537V2.463C0 .923 1.666-.04 3 .73l19.997 11.538z"
          fill="currentColor"
        />
        <path
          d="M46.997 12.268c1.334.77 1.334 2.695 0 3.464L27 27.27c-1.333.769-2.999-.194-2.999-1.733V2.463C24 .923 25.666-.04 27 .73l19.997 11.538z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function VolumeHigh(props) {
  return (
    <svg viewBox="0 0 58 58" fill="none" {...props}>
      <path
        d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643zM50.694 29c0-6.718-2.628-13.005-7.408-17.729a1.36 1.36 0 00-1.926.012 1.36 1.36 0 00.011 1.926c4.26 4.202 6.593 9.81 6.593 15.791s-2.345 11.589-6.593 15.791a1.36 1.36 0 00-.011 1.926c.26.272.612.408.963.408.34 0 .69-.136.951-.397 4.792-4.712 7.42-11.01 7.42-17.728z"
        fill="currentColor"
      />
      <path
        d="M43.602 29c0-4.928-1.88-9.55-5.302-13.016a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c2.912 2.957 4.52 6.9 4.52 11.113 0 4.214-1.608 8.157-4.52 11.113a1.36 1.36 0 00.012 1.926c.26.26.611.397.951.397.351 0 .703-.136.963-.408 3.421-3.49 5.313-8.111 5.313-13.039z"
        fill="currentColor"
      />
      <path
        d="M32.568 20.674a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c1.677 1.7 2.606 3.976 2.606 6.412a9.105 9.105 0 01-2.606 6.412 1.36 1.36 0 00.012 1.925c.26.261.611.397.951.397.351 0 .703-.136.963-.408 2.186-2.22 3.387-5.166 3.387-8.315.011-3.16-1.19-6.117-3.376-8.337z"
        fill="currentColor"
      />
    </svg>
  );
}

export function VolumeMute(props) {
  return (
    <svg viewBox="0 0 33 58" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Dots(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={5} cy={24} r={5} />
      <circle cx={24} cy={24} r={5} />
      <circle cx={43} cy={24} r={5} />
    </svg>
  );
}
