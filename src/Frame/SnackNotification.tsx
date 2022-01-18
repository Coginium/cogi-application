import useStorageManager from "../Hooks/useStrageManager";
import './SnackNotification.css';
/**
 *  This is a component that shown notifications in a "snack" form.
 *  At this time it only shown notification about lack ot persistance
 *  permissions.
 */
export default function SnackNotification() {

    const { persisted } = useStorageManager();

    console.log(persisted);

    return (
        <>
            {!persisted && (<div className="frame-snacknotification">
                The application is not granted persisten storage. All changes will be wiped out when closed.
            </div>)} 
        </>
    );
};