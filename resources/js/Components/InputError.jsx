export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-xs ml-2 mt-1 text-red-600 ' + className}>
            {message}
        </p>
    ) : null;
}
