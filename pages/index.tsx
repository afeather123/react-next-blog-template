import {NextPage} from 'next';
import metadata from '../postMetadata';
import Link from 'next/link';
const  styles = require('./index.module.scss');

const Home: NextPage<{userAgent: string}> = ({ userAgent }) => <div>
    <div className={styles.postContainer}>
        {metadata.map(ele => 
            <div key={ele.title} className={styles.postCard}>
                <Link href={`/posts/${ele.path}`}>
                    <a href="" className={styles.postTitle}>{ele.title}</a> 
                </Link>
            </div>
        )}
    </div>
</div>;

export default Home;
