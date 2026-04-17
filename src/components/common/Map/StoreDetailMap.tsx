import useMediaQuery from '@mui/material/useMediaQuery';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const StoreDetailMap = () => {
    const stores = [
        {
            id: 1,
            name: 'BEAUTY BOX 199 KHÁNH HỘI',
            address: 'Số 199 Khánh Hội, Quận 4, TP.HCM',
            position: [10.7553, 106.7013] as [number, number]
        }
    ];

    const isXS = useMediaQuery('(max-width: 576px)');

    return (
        <div className='sticky z-0 top-[150px]'>
            <MapContainer
                center={[10.7769, 106.7009]} // trung tâm TP.HCM
                zoom={13}
                style={{ width: '100%', height: isXS ? '60vh' : '400px', zIndex: 0, borderRadius: '20px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
                {stores.map(store => (
                    <Marker key={store.id} position={store.position}>
                        <Popup>
                            <div>
                                <div className="font-bold">{store.name}</div>
                                <div>{store.address}</div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default StoreDetailMap